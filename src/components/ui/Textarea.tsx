import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  showCharCount?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, showCharCount = false, maxLength, value, ...props }, ref) => {
    const textareaId = id || React.useId()
    const hasError = !!error
    const errorId = hasError ? `${textareaId}-error` : undefined
    const charCount = typeof value === 'string' ? value.length : 0

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-slate-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            hasError && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={errorId}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        <div className="mt-2 flex justify-between text-sm">
          {error ? (
            <p id={errorId} className="text-red-600">
              {error}
            </p>
          ) : (
            <div />
          )}
          {showCharCount && maxLength && (
            <p className="text-gray-500">
              {charCount} / {maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
