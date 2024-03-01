import { G, Path, Svg } from "react-native-svg";
import { params } from "./type";
import { colors } from "../../Theme/colors";
import { hp } from "../../Common/functions";

const Home = ({ color = colors.black, height = hp(2) }: params) => (
    <Svg
        viewBox="0 0 24 24"
        fill={color}
        width={height}
        height={height}>
        <Path
            fill={color}
            d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z">
        </Path>
    </Svg>
)

const Info = ({ color = colors.black, height = hp(2) }: params) => (
    <Svg
        viewBox="0 0 24 24"
        fill={color}
        width={height}
        height={height}>
        <Path
            fill={color}
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z">
        </Path>
    </Svg>
)



export { Home, Info }