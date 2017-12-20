using LMS.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LMS.Domain.Models;
using LMS.Domain.Interfaces.Repository;

namespace LMS.Domain.Services
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorRepository _authorRepository;
        public AuthorService(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public void AddAuthor(Author author)
        {
            _authorRepository.AddAuthor(author);
        }
    }
}
