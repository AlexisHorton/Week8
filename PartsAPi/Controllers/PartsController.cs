using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartsAPi.Controllers
{
    [Route("parts")]
    [ApiController]
    public class PartsController : ControllerBase
    {
        [HttpGet]
        public List<Parts> ListParts()
        {
            return Parts.ListParts();
        }

        [HttpPost]
        public Parts AddPart(Parts newpart)
        {
            return Parts.AddPart(newpart);
        }

        [HttpDelete]
        public bool DeletePart(int id)
        {
            return Parts.DeletePart(id);
        }
    }
}
