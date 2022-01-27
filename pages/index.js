import appConfig from "../config.json"; 
import {Box, Button, Text, TextField, Image} from '@skynexui/components';
import React from "react";
import {useRouter} from 'next/router';


function Titulo(props){
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            
            <style jsx>{`
                ${Tag} {
                color: ${appConfig.theme.colors.neutrals[200]};
                font-size: 25px;
                font-weight: 600; 
                }
            `}</style>
        </>
    )
}

//Componente react
//function HomePage() {
    //JSX
//    return (
//        <div>
//            <GlobalStyle/>
//            <Titulo tag="h1">Boas vindas ao engcord </Titulo>
//            <h2>Conecte-se ao novo</h2>
//        </div>
//    )    
//  }
  
//  export default HomePage
function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  console.log(http.statusCode);
  
  if (http.statusCode != 404)
      console.log('erro')
}

function validate (values) {
  var url = `https://github.com/${values}.png`
  UrlExists(url)
}
export default function PaginaInicial() {
    //const username = 'williammoraesdeassis';
       const [username, setUsername] = React.useState('williammoraesdeassis');
       const roteamento = useRouter();
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[100],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2022/01/wallpaperflare.com_wallpaper.jpg)',
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
              boxShadow: '0px 0px 10px 5px #73FFFF',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento){
                  infosDoEvento.preventDefault();
                  window.location.href='/chat';
                  roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas ao futuro!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                value={username}
                onChange={function (event){
                  //onde o valor está?
                  const valor = event.target.value;
                  //Trocar o valor do user name
                  console.log(valor);
                  setUsername(valor);
                  validate(username);
                  
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
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
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
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
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
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