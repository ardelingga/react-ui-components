import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../utils/utils"
import { X } from "lucide-react"

const modalContentVariants = cva(
    "relative dark:bg-gray-800 rounded-lg shadow-xl max-h-[90vh] overflow-hidden bg-white",
    {
        variants: {
            size: {
                sm: "w-full max-w-sm",
                md: "w-full max-w-md",
                lg: "w-full max-w-lg",
                xl: "w-full max-w-xl",
                "2xl": "w-full max-w-2xl",
                full: "w-full max-w-full",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

export interface ModalProps
    extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
    showCloseButton?: boolean
    closeOnOverlayClick?: boolean
    closeOnEscape?: boolean
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

interface ModalContextValue {
    onClose: () => void
}

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined)

// function useModalContext() {
//     const context = React.useContext(ModalContext)
//     if (!context) {
//         throw new Error("Modal components must be used within a Modal")
//     }
//     return context
// }

function Modal({
    className,
    size,
    isOpen,
    onClose,
    title,
    description,
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    children,
    ...props
}: ModalProps) {
    // Handle escape key
    React.useEffect(() => {
        if (!closeOnEscape) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            // Prevent body scroll
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, closeOnEscape, onClose])

    if (!isOpen) return null

    return (
        <ModalContext.Provider value={{ onClose }}>
            <div className={cn("fixed inset-0 z-50 flex items-center justify-center h-screen", className)} {...props}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={closeOnOverlayClick ? onClose : undefined}
                />

                {/* Modal Content */}
                <div className={cn(modalContentVariants({ size }), '')}>
                    {/* Header */}
                    {(title || showCloseButton) && (
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                            <div>
                                {title && (
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {title}
                                    </h2>
                                )}
                                {description && (
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        {description}
                                    </p>
                                )}
                            </div>
                            {showCloseButton && (
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                        {children}
                    </div>
                </div>
            </div>
        </ModalContext.Provider>
    )
}

function ModalHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("p-6 border-b border-gray-200 dark:border-gray-700", className)}
            {...props}
        >
            {children}
        </div>
    )
}

function ModalBody({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-6", className)} {...props}>
            {children}
        </div>
    )
}

function ModalFooter({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2", className)}
            {...props}
        >
            {children}
        </div>
    )
}

function ModalTitle({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn("text-xl font-semibold text-gray-900 dark:text-white", className)}
            {...props}
        >
            {children}
        </h2>
    )
}

function ModalDescription({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("mt-1 text-sm text-gray-600 dark:text-gray-400", className)}
            {...props}
        >
            {children}
        </p>
    )
}

export { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, ModalDescription }