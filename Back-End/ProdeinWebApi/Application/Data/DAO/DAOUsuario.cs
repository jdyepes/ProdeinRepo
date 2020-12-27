using ProdeinWebApi.Application.Common.Entities;
using ProdeinWebApi.Application.Common.Entities.Fabrica;
using ProdeinWebApi.Application.Common.Exceptions;
using ProdeinWebApi.Application.Common.Resources;
using ProdeinWebApi.Application.Data.DAO.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Data.DAO
{
    public class DAOUsuario : DAO, IDAOUsuario
    {       
        public void Actualizar(Entidad entidad)
        {
            throw new NotImplementedException();
        }

        public void Agregar(Entidad entidad)
        {
            throw new NotImplementedException();
        }

        public List<Entidad> Consultar(Entidad entidad)
        {
            throw new NotImplementedException();
        }

        public List<Entidad> ConsultarTodos()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Consulta el usuario por nombre para el login
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns></returns>
        public Entidad ConsultarUsuarioLogin(Entidad entidad)
        {
            Usuario user = entidad as Usuario;
            Conectar();
            StoredProcedure("ConsultarUsuarioLogin");
            AgregarParametro("nombreLogin", user.NombreLogin);
            EjecutarReader();
            for (int i = 0; i < cantidadRegistros; i++)
            {
                user = FabricaEntidades.CrearUsuario();

                user.Id = GetInt(i, 0);
                user.NombreLogin = GetString(i, 1);
                user.Nombre = GetString(i, 2);
                user.Apellido = GetString(i, 3);
                user.Password = GetString(i, 4);
                user.Rol = GetString(i, 5);
                user.FechaCreacion = GetDateTime(i, 6);
                user.FechaModificacion = GetDateTime(i, 7);
                user.DireccionIP = GetString(i, 8);
               
            }
           
            if (cantidadRegistros == 0)
                throw new UsuarioNoEncontradoException( DateTime.Now, MensajesRespuesta.UsuarioNoEncontrado);
           
            return user;
        }

        public void Eliminar(Entidad entidad)
        {
            throw new NotImplementedException();
        }
    }
}