using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Domain.Interfaces.Repository;

namespace LMS.Api.Controllers
{
    [RoutePrefix("gender")]
    public class GenderController : ApiController
    {
        private readonly IGenderRepository _genderRepository;
        public GenderController(IGenderRepository genderRepository)
        {
            _genderRepository = genderRepository;
        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetGenders()
        {
            var genders = _genderRepository.GetGenders();

            return Ok(genders);
        }

    }
}
