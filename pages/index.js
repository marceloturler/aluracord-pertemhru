import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

//Pacote de estilos globais para limpar o CSS
function GlobalStyle() {
    return (
        <style global jsx>{`
        *  {

            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        body {
            background: #CCCAAA;
            font-family: 'Mulish', 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}


//Component Title
function Titulo(props) {

    const Tag = props.tag || 'h1';

    return (

        <>
            <Tag>
                {props.children}
            </Tag>

            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['500']};
                    font-size: 60px;
                    font-weight: bolder;  
                }
                h2 {
                    color: green;
                    font-size: 40px;
                    font-weight: light;
                    text-shadow: #CCC444 3px 3px 10px;
                }
            `}</style>

        </>
    );

}


//Componente React
// function HomePage() {

//     //JSX
//     return (

//         <div>
//             <GlobalStyle />

//             <Title tag="h1">Este texto</Title>

//             <h2>
//                 Discord - Alura Matrix
//             </h2>

//         </div>

//     )

// }

// export default HomePage


export default function PaginaInicial() {
    const username = 'marceloturler';
  
    return (
      <>
        <GlobalStyle />
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.secondary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formul??rio */}
            <Box
              as="form"
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.secondary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.secondary[500],
                  mainColorLight: appConfig.theme.colors.secondary[400],
                  mainColorStrong: appConfig.theme.colors.secondary[600],
                }}
              />
            </Box>
            {/* Formul??rio */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[500],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[100],
                  backgroundColor: appConfig.theme.colors.neutrals[600],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }