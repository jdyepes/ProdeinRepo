using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Common.Entities.Fabrica
{
    public static class FabricaEntidades
    {
        /// <summary>
        /// Metodo que realiza una instancia de tipo usuario
        /// </summary>
        /// <returns></returns>
        public static Usuario CrearUsuario()
        {
            return new Usuario();
        }
    }
}