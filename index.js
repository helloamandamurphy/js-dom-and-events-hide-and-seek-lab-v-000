function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
};

function deepestChild() {
  let parent = document.getElementById('grand-node');
  let child = parent.children[ 0 ];

  while (child) {
    parent = child
    child = parent.children[ 0 ]
  };
  return parent;
};

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll( '.ranked-list' )

  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children


  for ( let j = 0, k = children.length; j < k; j++ ) {
        children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
  }
  }
}
