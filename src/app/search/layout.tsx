import SearchHeader from "@/components/SearchHeader";

export default function SearchLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <>
            <SearchHeader />
            {children}
        </>
    )
  }