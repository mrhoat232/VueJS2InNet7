using Microsoft.AspNetCore.Mvc;

namespace VueJS2InNet7.Controllers
{
    public class CategoryController : ControllerBase
    {
        public CategoryController()
        {
        }

        public IActionResult GetDemo()
        {
            var result = new List<Category>
            {
                new Category
                {
                    Name = "Category 1",
                    Description = "Description 1"
                },
                new Category
                {
                    Name = "Category 2",
                    Description = "Description 2"
                },
                new Category
                {
                    Name = "Category 3",
                    Description = "Description 3"
                },
                new Category
                {
                    Name = "Category 4",
                    Description = "Description 4"
                },
                new Category
                {
                    Name = "Category 5",
                    Description = "Description 5"
                }
            };
            return Ok(result);
        }
    }

    public class Category
    {
        public string? Name { get; set; }

        public string? Description { get; set; }
    }
}