import HeaderNavigation from "../HeaderNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";
import { HeaderContainer, HeaderComponent } from "./AppHeader.styles";

export default function AppHeader() {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <HeaderNavigation />
                <AuthNavigation />
                <UserMenu />
            </HeaderContainer>
        </HeaderComponent>
    );
}
