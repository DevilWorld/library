using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LMS.Api.Controllers
{
    [RoutePrefix("author")]
    public class AuthorController : ApiController
    {
        public IHttpActionResult Post()
        {
            return Ok();
        }
    }
}
