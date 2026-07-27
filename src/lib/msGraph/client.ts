// import * as msal from '@azure/msal-node'

// const msalConfig = {
//   auth: {
//     clientId: process.env.MICROSOFT_ENTRA_ID_CLIENT_ID!,
//     authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_ENTRA_ID_TENANT_ID!}`,
//     clientSecret: process.env.MICROSOFT_ENTRA_ID_SECRET_VALUE!,
//   },
// }

// export const cca = new msal.ConfidentialClientApplication(msalConfig)

// export const getToken = async () => {
//   const token = await cca.acquireTokenByClientCredential({
//     scopes: ['https://graph.microsoft.com/.default'],
//   })
//   return token
// }


import { ClientSecretCredential } from '@azure/identity'
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials'
import { Client } from '@microsoft/microsoft-graph-client'
// // import TokenCredentialAuthenticationProvider


const credential = new ClientSecretCredential(
  process.env.MICROSOFT_ENTRA_ID_TENANT_ID!,
  process.env.MICROSOFT_ENTRA_ID_CLIENT_ID!,
  process.env.MICROSOFT_ENTRA_ID_SECRET_VALUE!,
)

const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: [
    'https://graph.microsoft.com/.default',
    // 'Mail.Send'
  ],
})

export const graphClient = Client.initWithMiddleware({
  debugLogging: true,
  authProvider: authProvider,
})

// const authProvider = new TokenCredentialAuthenticationProvider(credential)

// const client = new HttpClientHandler(credential)