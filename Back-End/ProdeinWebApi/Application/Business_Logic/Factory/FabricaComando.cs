using ProdeinWebApi.Application.Business_Logic.Command.Usuario;
using ProdeinWebApi.Application.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Business_Logic.Factory
{
    public static class FabricaComando
    {
        public static ComandoConsultarUsuarioLogin CrearComandoConsultarUsuarioLogin(Entidad usuario)
        {
            return new ComandoConsultarUsuarioLogin(usuario);
        }


    }
}