using LMS.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Domain.Interfaces.Services
{
    public interface IAuthorService
    {
        void AddAuthor(Author author);
    }
}
