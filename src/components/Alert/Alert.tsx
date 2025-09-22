import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/utils"
import { X } from "lucide-react"

const alertVariants = cva(
  "relative w-full rounded-lg px-6 py-3 text-sm font-semibold flex items-center justify-between mb-0",
  {
    variants: {
      variant: {
        // Default/Filled variants
        primary: "bg-blue-50 dark:bg-blue-600/25 text-blue-600 dark:text-blue-400 border-blue-50",
        secondary: "bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 border-purple-100",
        success: "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400 border-green-100",
        warning: "bg-amber-100 dark:bg-amber-600/25 text-amber-600 dark:text-amber-400 border-amber-100",
        info: "bg-cyan-100 dark:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400 border-cyan-100",
        danger: "bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400 border-red-100",
        
        // Outline variants
        "primary-outline": "bg-transparent text-blue-600 border border-blue-600",
        "secondary-outline": "bg-transparent text-purple-600 dark:text-purple-400 border border-purple-600",
        "success-outline": "bg-transparent text-green-600 border border-green-600",
        "warning-outline": "bg-transparent text-amber-600 border border-amber-600",
        "info-outline": "bg-transparent text-cyan-600 border border-cyan-600",
        "danger-outline": "bg-transparent text-red-600 border border-red-600",
        
        // Solid variants
        "primary-solid": "bg-blue-600 text-white border-blue-600",
        "secondary-solid": "bg-purple-600 text-white border-purple-600",
        "success-solid": "bg-green-600 text-white border-green-600",
        "warning-solid": "bg-amber-600 text-white border-amber-600",
        "info-solid": "bg-cyan-600 text-white border-cyan-600",
        "danger-solid": "bg-red-600 text-white border-red-600",
      },
      style: {
        default: "rounded-lg",
        "left-border": "rounded border-l-4",
      },
      size: {
        default: "py-3 text-lg",
        sm: "py-2 text-sm",
        lg: "py-4 text-xl",
      }
    },
    defaultVariants: {
      variant: "primary",
      style: "default",
      size: "default",
    },
  }
)

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
}

function Alert({
  className,
  variant,
  style,
  size,
  dismissible = false,
  onDismiss,
  icon,
  children,
  ...props
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant, style, size }), className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-xl shrink-0">{icon}</span>}
        <div className="flex-1">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="text-2xl leading-none hover:opacity-70 transition-opacity"
          aria-label="Dismiss alert"
        >
          <X size={20} />
        </button>
      )}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("font-semibold text-lg mb-0", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("font-medium text-sm mt-2 leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }