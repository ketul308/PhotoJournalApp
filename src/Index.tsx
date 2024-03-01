import { Provider } from "react-redux";
import RootNavigation from "./Navigation/RootNavigation";
import { store } from "./redux/store/store";

export function ReduxToolkit() {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    )
}