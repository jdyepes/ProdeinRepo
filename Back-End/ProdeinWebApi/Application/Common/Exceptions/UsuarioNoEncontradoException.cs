using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Common.Exceptions
{
    public class UsuarioNoEncontradoException : Exception
    {
        private string _mensaje;
        private DateTime _fecha;
        private int _idUsuario;
        private string _tipoUsuario; // Rol del usuario. Admin o user
       

        public UsuarioNoEncontradoException(int idUsuario, string rol, DateTime fecha, string mensaje)
        {
            this.IdUsuario = idUsuario;
            this.TipoUsuario = rol;
            this.Fecha = fecha;
            this.Mensaje = mensaje;
        }

        public string Mensaje { get => _mensaje; set => _mensaje = value; }
        public DateTime Fecha { get => _fecha; set => _fecha = value; }
        public int IdUsuario { get => _idUsuario; set => _idUsuario = value; }
        public string TipoUsuario { get => _tipoUsuario; set => _tipoUsuario = value; }
    }
}