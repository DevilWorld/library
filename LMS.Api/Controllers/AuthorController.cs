using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Domain.Interfaces.Services;
using LMS.Domain.Models;
using System.Web.Http.Cors;

namespace LMS.Api.Controllers
{
    [RoutePrefix("author")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AuthorController : ApiController
    {
        private readonly IAuthorService _authorService;

        public AuthorController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Post(Author author)
        {
            _authorService.AddAuthor(author);

            return Ok();
        }
    }
}
