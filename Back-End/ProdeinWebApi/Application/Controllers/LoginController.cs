using ProdeinWebApi.Application.Business_Logic.Command;
using ProdeinWebApi.Application.Business_Logic.Factory;
using ProdeinWebApi.Application.Business_Logic.Token;
using ProdeinWebApi.Application.Common.Entities;
using ProdeinWebApi.Application.Common.Exceptions;
using ProdeinWebApi.Application.Common.Logger;
using ProdeinWebApi.Application.Common.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace ProdeinWebApi.Application.Controllers
{
    /// <summary>
    /// Creado sab 12/dic/2020 Jesus Yepes
    /// Clase para autenticacion de usuarios
    /// </summary>
    [AllowAnonymous]
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        [HttpGet]
        [Route("echoping")]
        public IHttpActionResult EchoPing()
        {
            return Ok(true);
        }

        [HttpGet]
        [Route("echouser")]
        public IHttpActionResult EchoUser()
        {
            var identity = Thread.CurrentPrincipal.Identity;
            return Ok($" IPrincipal-user: {identity.Name} - IsAuthenticated: {identity.IsAuthenticated}");
        }


        [HttpPost]
        [Route("authenticate")]
        public HttpResponseMessage Authenticate(Usuario login)
        {
            try
            {
                if (string.IsNullOrEmpty(login.NombreLogin))
                   return Request.CreateResponse(HttpStatusCode.BadRequest, MensajesRespuesta.LoginNulo);        

                Comando comando = FabricaComando.CrearComandoConsultarUsuarioLogin(login);
                comando.Ejecutar();

                Usuario resp = comando.GetEntidad() as Usuario;
                bool isCredentialValid = (login.Password == resp.Password);
                if (isCredentialValid)
                {
                    var token = TokenGenerator.GenerateTokenJwt(login.NombreLogin);
                    resp.Token = token;
                    return Request.CreateResponse(HttpStatusCode.OK ,resp);
                }
                else
                {
                    Log.WarmFormat("Datos recibidos incorrectos. " + MensajesRespuesta.CredencialesInvalidas);
                    return Request.CreateResponse(HttpStatusCode.Unauthorized, MensajesRespuesta.CredencialesInvalidas);                    
                }
            }
            catch (BaseDeDatosException ex)
            {
                Log.ErrorFormat("Ha ocurrido un error en LoginController. Mensaje: {0} | Usuario: {1} | Exception: {2}", ex.Mensaje, login.NombreLogin, ex.Excepcion.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Mensaje, ex);
            }
            catch (ExcepcionGeneral ex)
            {
                Log.ErrorFormat("Exepcion general. Mensaje excepcion: {0} | Trace: {1} | Exception: {2} ", ex.Message, ex.StackTrace, ex.Excepcion.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Mensaje, ex);
            }
           
        }
    }
}
