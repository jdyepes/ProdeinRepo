using ProdeinWebApi.Application.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Business_Logic.Command
{
    public abstract class Comando
    {
        private Entidad entidad;

        public Entidad Entidad { get => entidad; set => entidad = value; }

        public abstract void Ejecutar();

        public abstract Entidad GetEntidad();

        public abstract List<Entidad> GetEntidades();
    }
}