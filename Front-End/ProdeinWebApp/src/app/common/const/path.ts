// ruta para los servicios web
export const AppUrlBase = 
{
    URL: 'https://localhost:44383/api'
};

//Usuario, administrador, persona, empresa, donaciones...
export const ServicePath =
{
    AUTH_API: `${AppUrlBase.URL}/login/authenticate`,
    USER: `${AppUrlBase.URL}/user`
}