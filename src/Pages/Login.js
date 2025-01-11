// import * as React from 'react';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { SignInPage } from '@toolpad/core/SignInPage';
// import { useTheme } from '@mui/material/styles';

// const providers = [{ id: 'credentials', name: 'Credentials' }];

// const BRANDING = {
//     logo: (
//         <img
//             src="https://mui.com/static/logo.svg"
//             alt="MUI logo"
//             style={{ height: 24 }}
//         />
//     ),
//     title: 'ICHS',
// };

// const signIn = async (provider, email, password) => {
//     console.log('Selected Provider:', provider);
//     console.log('Email:', email);
//     console.log('Password:', password);


// };

// export default function BrandingSignInPage() {
//     const theme = useTheme();

//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');

//     const handleSignIn = async (provider) => {
//         if (!email || !password) {
//             console.error('Email and Password are required!');
//             return;
//         }
//         await signIn(provider, email, password);
//     };

//     return (
//         <AppProvider branding={BRANDING} theme={theme}>
//             <SignInPage
//                 signIn={(provider) => handleSignIn(provider)}
//                 providers={providers}
//                 slotProps={{
//                     emailField: {
//                         value: email,
//                         onChange: (e) => setEmail(e.target.value),
//                         autoFocus: true,
//                     },
//                     passwordField: {
//                         value: password,
//                         onChange: (e) => setPassword(e.target.value),
//                     },
//                 }}
//             />
//         </AppProvider>
//     );
// }

import React from 'react'

function Login() {
    return (
        <div>Login</div>
    )
}

export default Login