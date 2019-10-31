var dropdown = document.querySelector(".dropdown");
                    var menu = document.querySelector(".dropdown__menu");
                    var content = document.querySelector(".dropdown__content");
                    var elements = document.querySelectorAll(".dropdown__element");
                    menu.addEventListener("click", function () {
                      menu.classList.toggle("dropdown__menu--active");
                      content.classList.toggle("dropdown__content--active");
                    });
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    
                    try {
                      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var element = _step.value;
                        element.addEventListener("click", function () {
                          menu.classList.remove("dropdown__menu--active");
                          content.classList.remove("dropdown__content--active");
                          var checked = document.querySelector('input[type="radio"][name="myradio"]:checked');
                          var label = document.querySelector("label[for=" + checked.getAttribute("id") + "]");
                          menu.innerHTML = label.innerHTML;
                        });
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }
                    
                    window.addEventListener("click", function (e) {
                      if (!dropdown.contains(e.target)) {
                        menu.classList.remove("dropdown__menu--active");
                        content.classList.remove("dropdown__content--active");
                      }
                    });