import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/utils"
import { AlertCircle, CheckCircle } from "lucide-react"

const formVariants = cva("w-full", {
    variants: {
        variant: {
            default: "",
            card: "p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
            minimal: "space-y-4",
        },
        size: {
            sm: "max-w-sm",
            md: "max-w-md",
            lg: "max-w-lg",
            xl: "max-w-xl",
            full: "w-full",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "full",
    },
})

const fieldVariants = cva("space-y-2", {
    variants: {
        variant: {
            default: "",
            inline: "flex items-center gap-4",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export interface FormProps
    extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface FormFieldProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {
    error?: string
    success?: string
    required?: boolean
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
    success?: boolean
}

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean
    success?: boolean
}

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    error?: boolean
    success?: boolean
}

function Form({
    className,
    variant,
    size,
    onSubmit,
    children,
    ...props
}: FormProps) {
    return (
        <form
            className={cn(formVariants({ variant, size }), className)}
            onSubmit={onSubmit}
            {...props}
        >
            {children}
        </form>
    )
}

function FormField({
    className,
    variant,
    error,
    success,
    children,
    ...props
}: FormFieldProps) {
    return (
        <div className={cn(fieldVariants({ variant }), className)} {...props}>
            {children}
            {error && (
                <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                </div>
            )}
            {success && (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>{success}</span>
                </div>
            )}
        </div>
    )
}

function FormLabel({
    className,
    required,
    children,
    ...props
}: FormLabelProps) {
    return (
        <label
            className={cn(
                "text-sm font-medium text-gray-900 dark:text-white",
                className
            )}
            {...props}
        >
            {children}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
    )
}

function FormInput({
    className,
    error,
    success,
    type = "text",
    ...props
}: FormInputProps) {
    return (
        <input
            type={type}
            className={cn(
                "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus:ring-red-500",
                success && "border-green-500 focus:ring-green-500",
                className
            )}
            {...props}
        />
    )
}

function FormTextarea({
    className,
    error,
    success,
    ...props
}: FormTextareaProps) {
    return (
        <textarea
            className={cn(
                "flex min-h-[80px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus:ring-red-500",
                success && "border-green-500 focus:ring-green-500",
                className
            )}
            {...props}
        />
    )
}

function FormSelect({
    className,
    error,
    success,
    children,
    ...props
}: FormSelectProps) {
    return (
        <select
            className={cn(
                "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-red-500 focus:ring-red-500",
                success && "border-green-500 focus:ring-green-500",
                className
            )}
            {...props}
        >
            {children}
        </select>
    )
}

function FormHelperText({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-sm text-gray-600 dark:text-gray-400", className)}
            {...props}
        >
            {children}
        </p>
    )
}

export {
    Form,
    FormField,
    FormLabel,
    FormInput,
    FormTextarea,
    FormSelect,
    FormHelperText,
}