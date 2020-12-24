using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Data.DAO
{
    public static class FabricaDao
    {
        /// <summary>
        /// Devuelve la instancia de DAOUsuario
        /// Creado dom 20/dic/2020
        /// </summary>
        /// <returns>DAOUsuario</returns>
        public static DAOUsuario CrearDAOUsuario()
        {
            return new DAOUsuario();
        }
    }
}