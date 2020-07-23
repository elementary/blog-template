Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-elementary-blog"
  spec.version       = "1.0.1"
  spec.authors       = ["elementary"]
  spec.email         = ["webdev@elementary.io"]

  spec.summary       = "Jekyll theme in ways inspired by both Medium and the popular Medium-look-alike mediumish-theme-jekyll"
  spec.homepage      = "https://github.com/elementary/blog-template"
  spec.license       = "GPL-3.0"

  spec.files         = `git ls-files -z`.split("\x0")

  spec.add_runtime_dependency "jekyll", "~> 3.6"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.13"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.15"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "kramdown", "~> 1.17"
  spec.add_runtime_dependency "rouge", "~> 3.19"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
