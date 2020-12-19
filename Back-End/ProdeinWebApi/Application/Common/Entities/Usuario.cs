using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Common.Entities
{
    public class Usuario : Entidad
    {
        private string _nombre;
        private string _apellido;
        private string _password;
        private string _rol;
        private DateTime _fechaCreacion;
        private DateTime _fechaModificacion;
        private string _direccionIP;
        private string _token;

        public string Nombre { get => _nombre; set => _nombre = value; }
        public string Apellido { get => _apellido; set => _apellido = value; }
        public string Password { get => _password; set => _password = value; }
        public string Rol { get => _rol; set => _rol = value; }
        public DateTime FechaCreacion { get => _fechaCreacion; set => _fechaCreacion = value; }
        public DateTime FechaModificacion { get => _fechaModificacion; set => _fechaModificacion = value; }
        public string DireccionIP { get => _direccionIP; set => _direccionIP = value; }
        public string Token { get => _token; set => _token = value; }
    }
}