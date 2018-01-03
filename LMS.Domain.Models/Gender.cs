using System;
using System.Collections.Generic;

namespace LMS.Domain.Models
{
    public class Gender
    {
        public int GenderId { get; set; }
        public string GenderType { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool Active { get; set; }

        public virtual ICollection<Author> Authors { get; set; }
    }
}
