using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProdeinWebApi.Application.Common.Entities
{
	public abstract class Entidad
	{
		private int _id;

		/// <summary>
		/// Getters y Setters de ID
		/// </summary>
		public int Id { get => _id; set => _id = value; }
	}
}