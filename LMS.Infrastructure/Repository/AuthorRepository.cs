using LMS.Domain.Models;
using LMS.Domain.Interfaces.Repository;

namespace LMS.Infrastructure.Repository
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly LmsDbContext _context;
        public AuthorRepository()
        {
            _context = new LmsDbContext();
        }

        public void AddAuthor(Author author)
        {
            _context.Authors.Add(author);
            _context.SaveChanges();
        }
    }
}
