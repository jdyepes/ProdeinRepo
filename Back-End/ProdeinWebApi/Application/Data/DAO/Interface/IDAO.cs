using ProdeinWebApi.Application.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Data.DAO.Interface
{
    public interface IDAO
    {
        void Agregar(Entidad entidad);

        void Actualizar(Entidad entidad);

        void Eliminar(Entidad entidad);

        List<Entidad> Consultar(Entidad entidad);

        List<Entidad> ConsultarTodos();
    }
}