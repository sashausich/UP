(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var binoreApi = function () {
  var localScope = {};

  var photoPosts = [{
    id: '1',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image1.jpg',
    likes: '120',
    tags: ['lol']
  }, {
    id: '2',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-23T14:00:00'),
    author: 'Katya Sychik',
    photoLink: 'assets/img/image2.jpg',
    likes: '645',
    tags: ['nice', 'cool']
  }, {
    id: '3',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image3.jpg',
    likes: '43',
    tags: ['art', 'nice']
  }, {
    id: '4',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-03-23T23:52:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image4.jpg',
    likes: '465',
    tags: ['lol']
  }, {
    id: '5',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-02-19T14:42:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image5.jpg',
    likes: '18',
    tags: ['beautiful']
  }, {
    id: '6',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-01-12T06:34:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image6.jpg',
    likes: '86',
    tags: ['beautiful']
  }, {
    id: '7',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-02-01T19:52:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image7.jpg',
    likes: '23',
    tags: ['beautiful']
  }, {
    id: '8',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-10-11T14:59:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image8.jpg',
    likes: '346',
    tags: ['beautiful', 'cool', 'lol']
  }, {
    id: '9',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-04-03T00:12:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image9.jpg',
    likes: '66',
    tags: ['beautiful', 'cool']
  }, {
    id: '10',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-10-24T12:52:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image10.jpg',
    likes: '72',
    tags: ['beautiful', 'nice']
  }, {
    id: '11',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2016-09-11T21:18:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image11.jpg',
    likes: '33',
    tags: ['lol']
  }, {
    id: '12',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2015-01-31T07:23:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image12.jpg',
    likes: '25',
    tags: ['art']
  }, {
    id: '13',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-22T03:45:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image13.jpg',
    likes: '85',
    tags: ['nice']
  }, {
    id: '14',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-05-28T23:56:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image14.jpg',
    likes: '334',
    tags: ['lol']
  }, {
    id: '15',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-08-02T17:12:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image15.jpg',
    likes: '6',
    tags: ['nice', 'cool']
  }, {
    id: '16',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-04-28T12:20:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image16.jpg',
    likes: '98',
    tags: ['lol']
  }, {
    id: '17',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2017-06-09T12:39:00'),
    author: 'Dori Mintaka',
    photoLink: 'assets/img/image17.jpg',
    likes: '121',
    tags: ['beautiful', 'nice']
  }, {
    id: '18',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-23T23:24:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image18.jpg',
    likes: '553',
    tags: ['cool']
  }, {
    id: '19',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-23T23:25:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image19.jpg',
    likes: '12',
    tags: ['nice']
  }, {
    id: '20',
    descriprion: 'Lorem ipsum dolor sit amet, novum tacimates instructior at nec. At abhorreant assueverit conclusionemque cum, erant gubergren suscipiantur cum an, vix ei alii omnium impetus.',
    createdAt: new Date('2018-02-23T23:21:00'),
    author: 'Oleg Safonov',
    photoLink: 'assets/img/image20.jpg',
    likes: '53',
    tags: ['lol']
  }];

  localScope.sortPosts = function () {
    photoPosts.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };

  localScope.getPhotoPosts = function () {
    var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var filterConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { author: undefined, tags: undefined, date: undefined };

    localScope.sortPosts();
    return photoPosts.filter(function (post) {
      return (!filterConfig.author || filterConfig.author === post.author) && (!filterConfig.tag || post.tags.indexOf(filterConfig.tag) !== -1) && (!filterConfig.date || new Date(post.createdAt) - new Date(filterConfig.date) < 0);
    }).splice(skip, top);
  };

  localScope.getPhotoPost = function (id) {
    return photoPosts.find(function (post) {
      return post.id === id;
    });
  };

  localScope.validatePhotoPost = function () {
    var photoPost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return photoPost && photoPost.id && photoPost.descriprion && photoPost.createdAt && photoPost.author && photoPost.photoLink && photoPost.likes && photoPost.tags;
  };

  localScope.addPhotoPost = function (photoPost) {
    if (localScope.validatePhotoPost(photoPost)) {
      if (localScope.getPhotoPost(photoPost.id)) {
        return false;
      }
      photoPosts.push(photoPost);
      return true;
    }
    return false;
  };

  var user = 'Oleg Safonov';
  var filter = {};
  var currentPosts = [];
  var perPage = 9;
  var showMore = true;

  var renderList = function renderList() {
    document.getElementById('load_more').style.visibility = showMore ? 'visible' : 'hidden';
    var container = document.getElementById('post_container');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    currentPosts.forEach(function (x) {
      var tags = x.tags.map(function (y) {
        return '#' + y;
      }).join(' ');
      var buttons = x.author === user ? '<i class="fas fa-edit"></i> <i class="far fa-trash-alt"></i> | ' : '';
      var m = x.createdAt;
      var dateString = ('0' + m.getUTCDate()).slice(-2) + '.' + ('0' + (m.getUTCMonth() + 1)).slice(-2) + '.' + m.getUTCFullYear() % 100 + ' at ' + ('0' + m.getUTCHours()).slice(-2) + ':' + ('0' + m.getUTCMinutes()).slice(-2);
      var template = '<div class="post">\n                          <div class="photo">\n                            <img src="' + x.photoLink + '" />\n                          </div>\n                          <div class="content">\n                            <div class="author"><strong>Author: ' + x.author + '</strong></div>\n                            <div class="time">Posted ' + dateString + '</div>\n                            <p class="description">' + x.descriprion + '</p>\n                            <div class="tags">' + tags + '</div>\n                            <div class="like">' + buttons + '\n                            <i class="far fa-heart"></i> ' + x.likes + '</div>\n                          </div>\n                        </div>';
      document.getElementById('post_container').innerHTML += template;
    });
  };

  localScope.editPhotoPost = function (id, photoPost) {
    var post = localScope.getPhotoPost(id);
    if (!post) {
      return false;
    }
    if (localScope.validatePhotoPost(post)) {
      if (photoPost.photoLink) {
        post.photoLink = photoPost.photoLink;
      }
      if (photoPost.descriprion) {
        post.descriprion = photoPost.descriprion;
      }
      if (photoPost.likes) {
        post.likes = photoPost.likes;
      }
      if (photoPost.tags) {
        post.tags = photoPost.tags;
      }
      renderList();
      return true;
    }
    return false;
  };

  localScope.removePhotoPost = function (id) {
    var post = localScope.getPhotoPost(id);
    if (!post) {
      return false;
    }
    currentPosts.splice(photoPosts.indexOf(post), 1);
    renderList();
    return true;
  };

  localScope.requestPosts = function () {
    var res = localScope.getPhotoPosts(currentPosts.length, perPage, filter);
    res.forEach(function (x) {
      return currentPosts.push(x);
    });
    showMore = currentPosts.length !== photoPosts.length;
    renderList();
  };

  localScope.requestFilter = function () {
    var author = document.getElementById('filter_author').value;
    if (author) {
      filter.author = author;
    }
    /* var tag = document.getElementById("filter_tag").value;
        if(tag != ""){
            filter.tag = tag;
        }
        var date = document.getElementById("filter_date").value;
        if(date != ""){
            filter.date = new Date(date);
        } */
    window.location.replace('#close');
    currentPosts = [];
    localScope.requestPosts();
  };

  document.addEventListener('DOMContentLoaded', localScope.requestPosts);
  return localScope;
}();

},{}]},{},[1]);
