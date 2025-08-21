// Global error handling and console management
'use client';

// Enhanced error boundary with detailed logging
export class ErrorBoundary extends Error {
  public readonly timestamp: string;
  public readonly userAgent: string;
  public readonly url: string;

  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'ErrorBoundary';
    this.timestamp = new Date().toISOString();
    this.userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Server';
    this.url = typeof window !== 'undefined' ? window.location.href : 'SSR';
    
    if (stack) {
      this.stack = stack;
    }
  }
}

// Console error interceptor for production
export const setupErrorHandling = () => {
  if (typeof window === 'undefined') return;

  // Capture console errors
  const originalError = console.error;
  console.error = (...args) => {
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      logErrorToService('Console Error', args.join(' '));
    }
    originalError.apply(console, args);
  };

  // Global error handler
  window.addEventListener('error', (event) => {
    const error = new ErrorBoundary(
      event.message,
      event.error?.stack
    );
    
    if (process.env.NODE_ENV === 'production') {
      logErrorToService('JavaScript Error', error.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: error.stack,
        timestamp: error.timestamp,
        userAgent: error.userAgent,
        url: error.url
      });
    }
  });

  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    const error = new ErrorBoundary(
      `Unhandled Promise Rejection: ${event.reason}`
    );
    
    if (process.env.NODE_ENV === 'production') {
      logErrorToService('Promise Rejection', error.message, {
        reason: event.reason,
        timestamp: error.timestamp,
        userAgent: error.userAgent,
        url: error.url
      });
    }
  });
};

// Error logging service (replace with your preferred service)
const logErrorToService = (
  type: string, 
  message: string, 
  context?: Record<string, unknown>
) => {
  // Example: Send to analytics or error reporting service
  try {
    fetch('/api/log-error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        message,
        context,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // Silently fail if logging service is unavailable
    });
  } catch {
    // Prevent error logging from causing additional errors
  }
};

// Safe console wrapper
export const safeConsole = {
  log: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...args);
    }
  },
  error: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(...args);
    } else {
      logErrorToService('Application Error', args.join(' '));
    }
  },
  info: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(...args);
    }
  }
};

// Performance monitoring utilities
export const performanceMonitor = {
  measureTime: (label: string, fn: () => void) => {
    if (process.env.NODE_ENV === 'development') {
      console.time(label);
      fn();
      console.timeEnd(label);
    } else {
      fn();
    }
  },
  
  measureAsyncTime: async <T>(label: string, fn: () => Promise<T>): Promise<T> => {
    const start = performance.now();
    try {
      const result = await fn();
      const end = performance.now();
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${label}: ${end - start}ms`);
      }
      
      return result;
    } catch (error) {
      const end = performance.now();
      safeConsole.error(`${label} failed after ${end - start}ms:`, error);
      throw error;
    }
  }
};
