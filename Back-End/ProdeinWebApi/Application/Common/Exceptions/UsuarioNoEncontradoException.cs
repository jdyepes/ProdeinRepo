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
     

        public UsuarioNoEncontradoException( DateTime fecha, string mensaje)
        {         
            this.Fecha = fecha;
            this.Mensaje = mensaje;
        }

        public string Mensaje { get => _mensaje; set => _mensaje = value; }
        public DateTime Fecha { get => _fecha; set => _fecha = value; }
      
    }
}