using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NLog;

namespace ProdeinWebApi.Application.Common.Logger
{
    public class Log
    {
        private static NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        public static NLog.Logger Logs { get => _logger ; set => _logger = value; }

        /// <summary>
        /// Se utiliza para registrar con formato en string y los argumentos
        /// Ej: (errror {1} mensaje {2}, valor 1, valor 2)
        /// </summary>
        /// <param name="format"></param>
        /// <param name="args"></param>
        public static void InfoFormat(string format, params object[] args)
        {
            Logs.Info(format, args);
        }

        public static void ErrorFormat(string format, params object[] args)
        {
            Logs.Error(format, args);
        }

        public static void WarmFormat(string format, params object[] args)
        {
            Logs.Warn(format, args);
        }

        public static void FatalFormat(string format, params object[] args)
        {
            Logs.Fatal(format, args);
        }
    }
}