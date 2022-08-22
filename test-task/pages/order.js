import MainLayout from "../components/MainLayout";

export default function Order() {
    return (
        <>
        <style jsx global>{`
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            a {
                color: inherit;
                text-decoration: none;
              }
              
            * {
            box-sizing: border-box;
            }
              
            @media (prefers-color-scheme: dark) {
            html {
                color-scheme: dark;
            }
            body {
                background: #FFFFFF;
            }
            }
        `}</style>
        <MainLayout>
            <div>Пока</div>
        </MainLayout>
        </>
    )
}