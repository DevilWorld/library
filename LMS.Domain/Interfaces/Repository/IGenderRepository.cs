using LMS.Domain.Models;
using System.Collections.Generic;

namespace LMS.Domain.Interfaces.Repository
{
    public interface IGenderRepository
    {
        IEnumerable<Gender> GetGenders();
    }
}
