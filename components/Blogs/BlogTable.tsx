"use client";
import { Share1Icon, TriangleUpIcon } from "@radix-ui/react-icons";
import {
  Cell,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

type Blog = {
  title: string;
  views: number;
  upvotes: number;
  comments: number;
  shares: number;
  author: string;
  published_date: string;
  tags: string[];
};

export default function BlogTable({
  blogs,
  loading
}: {
  blogs: Blog[];
  loading: boolean;
}) {
  const columns = [
    {
      header: "Title",
      accessorKey: "title",
      size: 300,
      enableResizing: true
    },
    {
      header: "Views",
      accessorKey: "views"
    },
    {
      header: "Upvotes/Shares",
      accessorKey: "upvotes_shares",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center justify-center space-x-2 text-sm">
          <TriangleUpIcon className="text-blue-500" />
          <span>{row.original.upvotes}</span>
          <Share1Icon className="text-blue-500" />
          <span>{row.original.shares}</span>
        </div>
      )
    },
    {
      header: "Comments",
      accessorKey: "comments"
    },
    {
      header: "Author",
      accessorKey: "author"
    },
    {
      header: "Date",
      accessorKey: "createdAt",
      cell: ({ row }: { row: any }) => (
        <div>{new Date(row.original.createdAt).toDateString()}</div>
      )
    }
    // {
    //   header: "Tags",
    //   accessorKey: "tags",
    //   cell: ({ row }: { row: any }) => <div>{row.original.tags.join(", ")}</div>
    // }
  ];
  const table = useReactTable({
    data: blogs,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 border-[2px] border-zinc-700"
                  style={{ width: header.column.columnDef.size ?? "auto" }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-center py-4 border-b border-zinc-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
