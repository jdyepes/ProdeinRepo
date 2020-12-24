using ProdeinWebApi.Application.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Data.DAO.Interface
{
    public interface IDAOUsuario: IDAO
    {
        Entidad ConsultarUsuarioLogin(Entidad usuario);
    }
}