using System.Collections.Generic;
using LMS.Domain.Interfaces.Repository;
using LMS.Domain.Models;

namespace LMS.Infrastructure.Repository
{
    public class GenderRepository : IGenderRepository
    {
        private readonly LmsDbContext _context;

        public GenderRepository()
        {
            _context = new LmsDbContext();
        }

        public IEnumerable<Gender> GetGenders()
        {
            return _context.Genders;
        }
    }
}
