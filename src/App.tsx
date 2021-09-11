import { QueryClientProvider } from "react-query";

import "./theme/global.scss";
import HomePage from "./pages/HomePage";
import { queryClient } from "./api-client/react-query";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HomePage />
        </QueryClientProvider>
    );
}

export default App;
