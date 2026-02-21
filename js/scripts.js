(function($){
	$(document).ready(function() {	

		$('#volumeButton').click(function() {
			const icon = $('#volumeIcon');
			icon.toggleClass('fa-volume-high fa-volume-xmark');
		});

		$('.toggle-btn button').click(function() {
			$('.nav-wrapper').toggleClass('nav-active');
			const icon = $(this).find('i');
			icon.toggleClass('fa-bars fa-xmark');
		});

		$(document).click(function(e) {
			if (!$(e.target).closest('.toggle-btn, .nav-wrapper').length) {
				$('.nav-wrapper').removeClass('nav-active');
				$('.toggle-btn button i').removeClass('fa-xmark').addClass('fa-bars');
			}
		});

		if ($('#main-disc').length) {
			const albums = {
				homayoun: {
					title: 'Homayoun',
					cover: 'images/disc/thumb-1.jpg',
					tracks: ['Track 1', 'Track 2', 'Track 3']
				},
				hajess: {
					title: 'Hajess',
					cover: 'images/disc/photo-1.jpg',
					tracks: ['Track 1', 'Track 2']
				},
				glory: {
					title: 'Glory of the Irises',
					cover: 'images/disc/art-1.jpg',
					tracks: ['Intro', 'Melody']
				}
			};

			let currentAlbumKey = null;

			function positionCDsInArc() {
				const thumbs = document.querySelectorAll('.cd-thumb');
				const mainDisc = document.getElementById('main-disc');
				const container = document.querySelector('.disc-container');

				if (!thumbs.length || !mainDisc || !container || window.innerWidth <= 1200) {
					return;
				}

				const discRect = mainDisc.getBoundingClientRect();
				const contRect = container.getBoundingClientRect();
				const discLeft = discRect.left - contRect.left;
				const discTop = discRect.top - contRect.top;
				const discSize = discRect.width;
				const discCenterX = discLeft + discSize / 2;
				const discCenterY = discTop + discSize / 2;
				const discRadius = discSize / 2;
				const thumbSize = thumbs[0].offsetWidth || 90;
				const gap = 55;
				const radius = discRadius + (thumbSize / 2) + gap;
				const startAngle = -40;
				const endAngle = 10;
				const total = thumbs.length;

				thumbs.forEach((thumb, index) => {
					const t = total === 1 ? 0.5 : index / (total - 1);
					const angle = startAngle + t * (endAngle - startAngle);
					const rad = angle * (Math.PI / 180);
					const x = discCenterX + radius * Math.cos(rad) - thumb.offsetWidth / 2;
					const y = discCenterY + radius * Math.sin(rad) - thumb.offsetHeight / 2;

					thumb.style.left = x + 'px';
					thumb.style.top = y + 'px';
				});
			}

			function setLandingView() {
				$('#album-title').text('Discography');
				$('#album-cover').attr('src', '').css('opacity', '0');
				$('.disc-label').text('Discography').show();
				$('#tracks').empty();
				$('.cd-thumb').removeClass('active');
				$('#main-disc').removeClass('spinning');
				currentAlbumKey = null;
			}

			function loadAlbum(albumKey) {
				const album = albums[albumKey];
				if (!album || currentAlbumKey === albumKey) {
					return;
				}

				currentAlbumKey = albumKey;
				$('.cd-thumb').removeClass('active');
				$('.cd-thumb[data-album="' + albumKey + '"]').addClass('active');
				$('#album-title').text(album.title);
				$('#album-cover').attr('src', album.cover).css('opacity', '1');
				$('.disc-label').hide();

				const tracksContainer = $('#tracks');
				tracksContainer.empty();

				album.tracks.forEach(function(trackTitle, i) {
					const progressWidth = 42 + (i * 8);
					tracksContainer.append(
						'<div class="track-entry">' +
						'<span>-' + (i + 1) + ' ' + trackTitle + '</span>' +
						'<div class="waveform"><span style="width:' + progressWidth + '%"></span></div>' +
						'<button type="button" aria-label="Play">▶</button>' +
						'</div>'
					);
				});
			}

			$('.cd-thumb').on('click', function() {
				loadAlbum($(this).data('album'));
			});

			$(window).on('load resize', positionCDsInArc);
			setLandingView();
			positionCDsInArc();
		}
	});
})(jQuery);
