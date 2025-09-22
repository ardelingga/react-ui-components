import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/utils"
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react"

const tableVariants = cva(
    "w-full caption-bottom text-sm",
    {
        variants: {
            variant: {
                default: "border-collapse",
                bordered: "border border-gray-200 dark:border-gray-700",
                striped: "border-collapse",
                minimal: "",
            },
            size: {
                sm: "text-xs",
                md: "text-sm",
                lg: "text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

const tableHeaderVariants = cva(
    "[&_tr]:border-b border-gray-200 dark:border-gray-700"
)

const tableBodyVariants = cva(
    "[&_tr:last-child]:border-0",
    {
        variants: {
            variant: {
                default: "",
                striped: "[&_tr:nth-child(even)]:bg-gray-50 dark:[&_tr:nth-child(even)]:bg-gray-800/50",
                hoverable: "[&_tr]:hover:bg-gray-50 dark:[&_tr]:hover:bg-gray-800/50 [&_tr]:transition-colors",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const tableRowVariants = cva(
    "border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-800/50 data-[state=selected]:bg-gray-100 dark:data-[state=selected]:bg-gray-800"
)

const tableCellVariants = cva(
    "p-4 align-middle [&:has([role=checkbox])]:pr-0",
    {
        variants: {
            variant: {
                default: "",
                head: "h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0",
                cell: "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            },
            size: {
                sm: "p-2 h-8",
                md: "p-4 h-12",
                lg: "p-6 h-16",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

export interface TableProps
    extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> { }

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>

export interface TableBodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableBodyVariants> { }

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>

export interface TableHeadProps
    extends React.ThHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {
    sortable?: boolean
    sortDirection?: 'asc' | 'desc' | null
    onSort?: () => void
}

export interface TableCellProps
    extends React.TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> { }

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>

function Table({ className, variant, size, ...props }: TableProps) {
    return (
        <div className="relative w-full overflow-auto">
            <table
                className={cn(tableVariants({ variant, size }), className)}
                {...props}
            />
        </div>
    )
}

function TableHeader({ className, ...props }: TableHeaderProps) {
    return (
        <thead className={cn(tableHeaderVariants(), className)} {...props} />
    )
}

function TableBody({ className, variant, ...props }: TableBodyProps) {
    return (
        <tbody className={cn(tableBodyVariants({ variant }), className)} {...props} />
    )
}

function TableFooter({ className, ...props }: TableHeaderProps) {
    return (
        <tfoot
            className={cn(
                "border-t bg-gray-100/50 font-medium dark:bg-gray-800/50 [&>tr]:last:border-b-0",
                className
            )}
            {...props}
        />
    )
}

function TableRow({ className, ...props }: TableRowProps) {
    return <tr className={cn(tableRowVariants(), className)} {...props} />
}

function TableHead({
    className,
    variant = "head",
    size,
    sortable,
    sortDirection,
    onSort,
    children,
    ...props
}: TableHeadProps) {
    const content = (
        <>
            {children}
            {sortable && (
                <span className="ml-2 inline-flex">
                    {sortDirection === 'asc' ? (
                        <ChevronUp className="h-4 w-4" />
                    ) : sortDirection === 'desc' ? (
                        <ChevronDown className="h-4 w-4" />
                    ) : (
                        <ChevronsUpDown className="h-4 w-4 opacity-50" />
                    )}
                </span>
            )}
        </>
    )

    if (sortable) {
        return (
            <th
                className={cn(
                    tableCellVariants({ variant, size }),
                    "cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800",
                    className
                )}
                onClick={onSort}
                {...props}
            >
                {content}
            </th>
        )
    }

    return (
        <th className={cn(tableCellVariants({ variant, size }), className)} {...props}>
            {content}
        </th>
    )
}

function TableCell({ className, variant = "cell", size, ...props }: TableCellProps) {
    return (
        <td className={cn(tableCellVariants({ variant, size }), className)} {...props} />
    )
}

function TableCaption({ className, ...props }: TableCaptionProps) {
    return (
        <caption
            className={cn("mt-4 text-sm text-gray-500 dark:text-gray-400", className)}
            {...props}
        />
    )
}

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}