import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { User, LogOut, LogIn, UserPlus } from 'lucide-react';

type User = {
    name: string;
};

export interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex justify-between items-center px-5 py-4 font-sans">
            {/* Logo and Brand */}
            <div className="flex items-center">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block align-top"
                >
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                            fill="#FFF"
                            className="dark:fill-gray-800"
                        />
                        <path
                            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                            fill="#555AB9"
                            className="dark:fill-blue-400"
                        />
                        <path
                            d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                            fill="#91BAF8"
                            className="dark:fill-blue-300"
                        />
                    </g>
                </svg>
                <h1 className="inline-block align-top my-1.5 ml-2.5 font-bold text-xl leading-none text-gray-900 dark:text-white">
                    Acme
                </h1>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-2.5">
                {user ? (
                    <>
                        <span className="mr-2.5 text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2">
                            <Icon iconNode={User} className="h-4 w-4" />
                            Welcome, <strong className="font-semibold">{user.name}</strong>!
                        </span>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={onLogout}
                            className="flex items-center gap-1.5"
                        >
                            <Icon iconNode={LogOut} className="h-4 w-4" />
                            Log out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={onLogin}
                            className="flex items-center gap-1.5"
                        >
                            <Icon iconNode={LogIn} className="h-4 w-4" />
                            Log in
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={onCreateAccount}
                            className="flex items-center gap-1.5"
                        >
                            <Icon iconNode={UserPlus} className="h-4 w-4" />
                            Sign up
                        </Button>
                    </>
                )}
            </div>
        </div>
    </header>
);