using LMS.Domain.Models;

namespace LMS.Domain.Interfaces.Repository
{
    public interface IAuthorRepository
    {
        void AddAuthor(Author author);
    }
}
