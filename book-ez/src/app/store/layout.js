import Sidebar from "../ui/sidebar/Sidebar"
import StoreProvider from "../provider"

export const metadata = {
    title: "Book-EZ - Buy & Rent Books",
    description: "An online store to sell and rent used Books"
}
// we can bettter use cart data store level, not further globaly
export default function BookStoreLayout ({children}) {
    return (
        <StoreProvider>
            <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
              <Sidebar />
                <div className="flex flex-wrap p-2 justify-center w-full">                    
                    {children}
                </div>
            </div>
        </StoreProvider>
    )
}