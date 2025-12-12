import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, label, error, id, ...props }, ref) => {
    const selectId = id || React.useId()
    const hasError = !!error
    const errorId = hasError ? `${selectId}-error` : undefined

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              "h-10 w-full appearance-none rounded-md border border-slate-300 bg-background bg-no-repeat pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              hasError && "border-red-500 focus:ring-red-500",
              className
            )}
            ref={ref}
            aria-invalid={hasError}
            aria-describedby={errorId}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
        {error && (
          <p id={errorId} className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
