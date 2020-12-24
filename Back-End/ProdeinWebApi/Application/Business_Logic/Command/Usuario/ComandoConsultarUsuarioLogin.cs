using ProdeinWebApi.Application.Common.Entities;
using ProdeinWebApi.Application.Data.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Business_Logic.Command.Usuario
{
    public class ComandoConsultarUsuarioLogin : Comando
    {
        private Entidad _usuario;
        private DAOUsuario _dao;       

        public ComandoConsultarUsuarioLogin(Entidad usuario)
        {
            this._usuario = usuario;
        }

        public override void Ejecutar()
        {
            _dao = FabricaDao.CrearDAOUsuario();
            _usuario = _dao.ConsultarUsuarioLogin(_usuario);        
        }

        public override Entidad GetEntidad()
        {
            return _usuario;
        }

        public override List<Entidad> GetEntidades()
        {
            throw new NotImplementedException();
        }
    }
}